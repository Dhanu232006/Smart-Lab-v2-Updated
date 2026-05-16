// ═══════════════════════════════════════════════════════════════
//  SmartLab — Custom React Hooks  (v2 — Feature Upgrade)
// ═══════════════════════════════════════════════════════════════

import { useState, useEffect, useCallback, useRef } from "react";
import {
  fetchComputers,
  fetchIssues,
  fetchComputerStats,
  fetchActivityLog,
  fetchIssuesByComputer,
  fetchIssuesByRollNumber,
  fetchProblematicPcs,
  updateIssueStatus    as apiUpdateIssueStatus,
  updateComputerStatus as apiUpdateComputerStatus,
  reportIssue          as apiReportIssue,
  toFrontendStatus,
  toBackendStatus,
  toFrontendIssueStatus,
  toBackendIssueStatus,
  LAB_ID,
} from "./api";

// ─────────────────────────────────────────────
//  useLabMap  (unchanged except import path)
// ─────────────────────────────────────────────
export function useLabMap(labId = LAB_ID) {
  const [computers, setComputers] = useState({});
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);
  const timerRef = useRef(null);

  const load = useCallback(async () => {
    try {
      const data = await fetchComputers(labId);
      const map  = {};
      data.forEach(pc => {
        map[pc.pcNumber] = { ...pc, frontendStatus: toFrontendStatus(pc.status) };
      });
      setComputers(map);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [labId]);

  useEffect(() => {
    load();
    timerRef.current = setInterval(load, 30_000);
    return () => clearInterval(timerRef.current);
  }, [load]);

  const optimisticUpdate = useCallback((pcNumber, newFrontendStatus) => {
    setComputers(prev => ({
      ...prev,
      [pcNumber]: {
        ...prev[pcNumber],
        frontendStatus: newFrontendStatus,
        status: toBackendStatus(newFrontendStatus),
      },
    }));
  }, []);

  return { computers, loading, error, refresh: load, optimisticUpdate };
}

// ─────────────────────────────────────────────
//  useIssues  (unchanged)
// ─────────────────────────────────────────────
export function useIssues(labId = LAB_ID, statusFilter = null) {
  const [issues,  setIssues]  = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const load = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchIssues(labId, statusFilter);
      setIssues(data.map(i => ({
        ...i,
        frontendStatus: toFrontendIssueStatus(i.status),
      })));
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [labId, statusFilter]);

  useEffect(() => { load(); }, [load]);

  return { issues, setIssues, loading, error, refresh: load };
}

// ─────────────────────────────────────────────
//  useDashboardStats  (unchanged)
// ─────────────────────────────────────────────
export function useDashboardStats(labId = LAB_ID) {
  const [stats,   setStats]   = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const load = useCallback(async () => {
    try {
      const data = await fetchComputerStats(labId);
      setStats(data);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [labId]);

  useEffect(() => {
    load();
    const t = setInterval(load, 60_000);
    return () => clearInterval(t);
  }, [load]);

  return { stats, loading, error, refresh: load };
}

// ─────────────────────────────────────────────
//  useActivityLog  (unchanged)
// ─────────────────────────────────────────────
export function useActivityLog() {
  const [log,     setLog]     = useState([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const data = await fetchActivityLog();
      setLog(data);
    } catch (_) {}
    finally { setLoading(false); }
  }, []);

  useEffect(() => {
    load();
    const t = setInterval(load, 30_000);
    return () => clearInterval(t);
  }, [load]);

  return { log, loading, refresh: load };
}

// ─────────────────────────────────────────────
//  useReportIssue  (unchanged)
// ─────────────────────────────────────────────
export function useReportIssue(onSuccess) {
  const [submitting, setSubmitting] = useState(false);
  const [success,    setSuccess]    = useState(false);
  const [error,      setError]      = useState(null);

  const submit = useCallback(async (payload) => {
    setSubmitting(true);
    setError(null);
    try {
      const created = await apiReportIssue(payload);
      setSuccess(true);
      if (onSuccess) onSuccess(created);
      return created;
    } catch (e) {
      setError(e.message);
      throw e;
    } finally {
      setSubmitting(false);
    }
  }, [onSuccess]);

  const reset = useCallback(() => { setSuccess(false); setError(null); }, []);
  return { submit, submitting, success, error, reset };
}

// ─────────────────────────────────────────────
//  useIssueActions  (unchanged)
// ─────────────────────────────────────────────
export function useIssueActions(onDone) {
  const [actionLoading, setActionLoading] = useState({});
  const [error,         setError]         = useState(null);

  const setKey = (key, val) =>
    setActionLoading(prev => ({ ...prev, [key]: val }));

  const updateIssue = useCallback(async (issueId, frontendTag, notes = "", resolvedBy = "Admin") => {
    const key = `issue-${issueId}`;
    setKey(key, true);
    setError(null);
    try {
      await apiUpdateIssueStatus(issueId, toBackendIssueStatus(frontendTag), notes, resolvedBy);
      if (onDone) onDone();
    } catch (e) {
      setError(e.message);
    } finally {
      setKey(key, false);
    }
  }, [onDone]);

  const updatePC = useCallback(async (computerId, frontendStatus, adminName = "Admin") => {
    const key = `pc-${computerId}`;
    setKey(key, true);
    setError(null);
    try {
      await apiUpdateComputerStatus(computerId, toBackendStatus(frontendStatus), adminName);
      if (onDone) onDone();
    } catch (e) {
      setError(e.message);
    } finally {
      setKey(key, false);
    }
  }, [onDone]);

  return { updateIssue, updatePC, actionLoading, error };
}

// ─────────────────────────────────────────────
//  usePcHistory — Feature 2: Issue History Per Computer
//  Fetches issue timeline when a computerId is provided.
// ─────────────────────────────────────────────
export function usePcHistory(computerId) {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);

  const load = useCallback(async () => {
    if (!computerId) return;
    setLoading(true);
    setError(null);
    try {
      const data = await fetchIssuesByComputer(computerId);
      setHistory(data.map(i => ({
        ...i,
        frontendStatus: toFrontendIssueStatus(i.status),
      })));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [computerId]);

  useEffect(() => { load(); }, [load]);

  return { history, loading, error, refresh: load };
}

// ─────────────────────────────────────────────
//  useStudentTracker — Feature 6: Student Issue Tracking
//  Lazy search: only fetches when `search()` is called.
// ─────────────────────────────────────────────
export function useStudentTracker() {
  const [issues,  setIssues]  = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,   setError]   = useState(null);
  const [searched,setSearched]= useState(false);

  const search = useCallback(async (rollNumber) => {
    if (!rollNumber?.trim()) return;
    setLoading(true);
    setError(null);
    setSearched(true);
    try {
      const data = await fetchIssuesByRollNumber(rollNumber.trim());
      setIssues(data.map(i => ({
        ...i,
        frontendStatus: toFrontendIssueStatus(i.status),
      })));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setIssues([]); setError(null); setSearched(false);
  }, []);

  return { issues, loading, error, searched, search, reset };
}

// ─────────────────────────────────────────────
//  useProblematicPcs — Feature 4: Most Problematic PCs
//  Polls every 5 minutes (analytics don't change fast).
// ─────────────────────────────────────────────
export function useProblematicPcs(labId = LAB_ID) {
  const [pcs,     setPcs]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  const load = useCallback(async () => {
    try {
      const data = await fetchProblematicPcs(labId);
      setPcs(data);
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [labId]);

  useEffect(() => {
    load();
    const t = setInterval(load, 300_000); // refresh every 5 min
    return () => clearInterval(t);
  }, [load]);

  return { pcs, loading, error, refresh: load };
}
