(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/admin/ChatDashboard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatDashboard",
    ()=>ChatDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ChatDashboard() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(56);
    if ($[0] !== "19a080d227580bea21b385ec328cdff38d60aabbe282ec74291f7ed11836ebf4") {
        for(let $i = 0; $i < 56; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "19a080d227580bea21b385ec328cdff38d60aabbe282ec74291f7ed11836ebf4";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [sessions, setSessions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [selectedSession, setSelectedSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [replyText, setReplyText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "ChatDashboard[useEffect()]": ()=>{
                const sessionsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "chatSessions");
                const q = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(sessionsRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("updatedAt", "desc"));
                const unsubscribe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q, {
                    "ChatDashboard[useEffect() > onSnapshot()]": (snapshot)=>{
                        const sessionsData = [];
                        snapshot.forEach({
                            "ChatDashboard[useEffect() > onSnapshot() > snapshot.forEach()]": (doc$0)=>{
                                const data = doc$0.data();
                                sessionsData.push({
                                    id: doc$0.id,
                                    email: data.email,
                                    status: data.status,
                                    createdAt: data.createdAt,
                                    updatedAt: data.updatedAt
                                });
                            }
                        }["ChatDashboard[useEffect() > onSnapshot() > snapshot.forEach()]"]);
                        setSessions(sessionsData);
                    }
                }["ChatDashboard[useEffect() > onSnapshot()]"]);
                return ()=>unsubscribe();
            }
        })["ChatDashboard[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] !== selectedSession) {
        t4 = ({
            "ChatDashboard[useEffect()]": ()=>{
                if (!selectedSession) {
                    return;
                }
                const messagesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "chatMessages");
                const q_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["query"])(messagesRef, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["where"])("sessionId", "==", selectedSession.id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["orderBy"])("timestamp", "asc"));
                const unsubscribe_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onSnapshot"])(q_0, {
                    "ChatDashboard[useEffect() > onSnapshot(arg1)]": (snapshot_0)=>{
                        const messagesData = [];
                        snapshot_0.forEach({
                            "ChatDashboard[useEffect() > onSnapshot(arg1) > snapshot_0.forEach()]": (doc_0)=>{
                                const data_0 = doc_0.data();
                                messagesData.push({
                                    id: doc_0.id,
                                    sessionId: data_0.sessionId,
                                    text: data_0.text,
                                    sender: data_0.sender,
                                    email: data_0.email,
                                    timestamp: data_0.timestamp,
                                    read: data_0.read
                                });
                            }
                        }["ChatDashboard[useEffect() > onSnapshot(arg1) > snapshot_0.forEach()]"]);
                        setMessages(messagesData);
                    }
                }["ChatDashboard[useEffect() > onSnapshot(arg1)]"], {
                    "ChatDashboard[useEffect() > onSnapshot(arg2)]": (error)=>{
                        console.error("Messages subscription error:", error);
                        setMessages([]);
                    }
                }["ChatDashboard[useEffect() > onSnapshot(arg2)]"]);
                return ()=>unsubscribe_0();
            }
        })["ChatDashboard[useEffect()]"];
        t5 = [
            selectedSession
        ];
        $[5] = selectedSession;
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[8] !== replyText || $[9] !== selectedSession) {
        t6 = ({
            "ChatDashboard[handleSendReply]": async (e)=>{
                e.preventDefault();
                if (!replyText.trim() || !selectedSession) {
                    return;
                }
                ;
                try {
                    const messagesRef_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "chatMessages");
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addDoc"])(messagesRef_0, {
                        sessionId: selectedSession.id,
                        text: replyText,
                        sender: "admin",
                        email: "admin@yannova.be",
                        timestamp: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])(),
                        read: true
                    });
                    const sessionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "chatSessions", selectedSession.id);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(sessionRef, {
                        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                    });
                    setReplyText("");
                } catch (t7) {
                    const error_0 = t7;
                    console.error("Error sending reply:", error_0);
                }
            }
        })["ChatDashboard[handleSendReply]"];
        $[8] = replyText;
        $[9] = selectedSession;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleSendReply = t6;
    let t7;
    if ($[11] !== selectedSession) {
        t7 = ({
            "ChatDashboard[handleCloseSession]": async ()=>{
                if (!selectedSession) {
                    return;
                }
                ;
                try {
                    const sessionRef_0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], "chatSessions", selectedSession.id);
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateDoc"])(sessionRef_0, {
                        status: "closed",
                        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serverTimestamp"])()
                    });
                    setSelectedSession(null);
                } catch (t8) {
                    const error_1 = t8;
                    console.error("Error closing session:", error_1);
                }
            }
        })["ChatDashboard[handleCloseSession]"];
        $[11] = selectedSession;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const handleCloseSession = t7;
    let formatDate;
    let formatTime;
    let t10;
    let t11;
    let t12;
    let t8;
    let t9;
    if ($[13] !== filter || $[14] !== selectedSession?.id || $[15] !== sessions) {
        let t13;
        if ($[23] !== filter) {
            t13 = ({
                "ChatDashboard[sessions.filter()]": (session)=>{
                    if (filter === "all") {
                        return true;
                    }
                    return session.status === filter;
                }
            })["ChatDashboard[sessions.filter()]"];
            $[23] = filter;
            $[24] = t13;
        } else {
            t13 = $[24];
        }
        const filteredSessions = sessions.filter(t13);
        formatTime = _ChatDashboardFormatTime;
        formatDate = _ChatDashboardFormatDate;
        t12 = "grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]";
        t10 = "bg-card rounded-xl border border-white/10 overflow-hidden flex flex-col";
        let t14;
        let t15;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                className: "h-5 w-5 text-secondary"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this);
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold",
                children: "Chat Sessies"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                lineNumber: 231,
                columnNumber: 13
            }, this);
            $[25] = t14;
            $[26] = t15;
        } else {
            t14 = $[25];
            t15 = $[26];
        }
        let t16;
        if ($[27] !== sessions) {
            t16 = sessions.filter(_ChatDashboardSessionsFilter);
            $[27] = sessions;
            $[28] = t16;
        } else {
            t16 = $[28];
        }
        let t17;
        if ($[29] !== t16.length) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 mb-4",
                children: [
                    t14,
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-auto text-sm text-gray-400",
                        children: [
                            t16.length,
                            " actief"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                        lineNumber: 248,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                lineNumber: 248,
                columnNumber: 13
            }, this);
            $[29] = t16.length;
            $[30] = t17;
        } else {
            t17 = $[30];
        }
        let t18;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = [
                "all",
                "active",
                "closed"
            ];
            $[31] = t18;
        } else {
            t18 = $[31];
        }
        let t19;
        if ($[32] !== filter) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: t18.map({
                    "ChatDashboard[(anonymous)()]": (f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "ChatDashboard[(anonymous)() > <button>.onClick]": ()=>setFilter(f)
                            }["ChatDashboard[(anonymous)() > <button>.onClick]"],
                            className: `px-3 py-1 text-xs rounded-full transition-colors ${filter === f ? "bg-secondary text-white" : "bg-white/5 text-gray-400 hover:bg-white/10"}`,
                            children: f === "all" ? "Alle" : f === "active" ? "Actief" : "Gesloten"
                        }, f, false, {
                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                            lineNumber: 264,
                            columnNumber: 48
                        }, this)
                }["ChatDashboard[(anonymous)()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                lineNumber: 263,
                columnNumber: 13
            }, this);
            $[32] = filter;
            $[33] = t19;
        } else {
            t19 = $[33];
        }
        if ($[34] !== t17 || $[35] !== t19) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-b border-white/10",
                children: [
                    t17,
                    t19
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                lineNumber: 274,
                columnNumber: 13
            }, this);
            $[34] = t17;
            $[35] = t19;
            $[36] = t11;
        } else {
            t11 = $[36];
        }
        t8 = "flex-1 overflow-y-auto";
        t9 = filteredSessions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-8 text-center text-gray-400",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    className: "h-12 w-12 mx-auto mb-3 opacity-30"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                    lineNumber: 282,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Geen chat sessies gevonden"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                    lineNumber: 282,
                    columnNumber: 152
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
            lineNumber: 282,
            columnNumber: 42
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "divide-y divide-white/5",
            children: filteredSessions.map({
                "ChatDashboard[filteredSessions.map()]": (session_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "ChatDashboard[filteredSessions.map() > <button>.onClick]": ()=>setSelectedSession(session_0)
                        }["ChatDashboard[filteredSessions.map() > <button>.onClick]"],
                        className: `w-full p-4 text-left transition-colors hover:bg-white/5 ${selectedSession?.id === session_0.id ? "bg-white/10" : ""}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        className: "h-5 w-5 text-secondary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                        lineNumber: 285,
                                        columnNumber: 346
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                    lineNumber: 285,
                                    columnNumber: 243
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-medium text-sm truncate",
                                            children: session_0.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                            lineNumber: 285,
                                            columnNumber: 427
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mt-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-xs px-2 py-0.5 rounded-full ${session_0.status === "active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`,
                                                    children: session_0.status === "active" ? "Actief" : "Gesloten"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 538
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500 flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                            className: "h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                                            lineNumber: 285,
                                                            columnNumber: 818
                                                        }, this),
                                                        formatDate(session_0.updatedAt)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 754
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                            lineNumber: 285,
                                            columnNumber: 492
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                    lineNumber: 285,
                                    columnNumber: 395
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                            lineNumber: 285,
                            columnNumber: 203
                        }, this)
                    }, session_0.id, false, {
                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                        lineNumber: 283,
                        columnNumber: 63
                    }, this)
            }["ChatDashboard[filteredSessions.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
            lineNumber: 282,
            columnNumber: 194
        }, this);
        $[13] = filter;
        $[14] = selectedSession?.id;
        $[15] = sessions;
        $[16] = formatDate;
        $[17] = formatTime;
        $[18] = t10;
        $[19] = t11;
        $[20] = t12;
        $[21] = t8;
        $[22] = t9;
    } else {
        formatDate = $[16];
        formatTime = $[17];
        t10 = $[18];
        t11 = $[19];
        t12 = $[20];
        t8 = $[21];
        t9 = $[22];
    }
    let t13;
    if ($[37] !== t8 || $[38] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[37] = t8;
        $[38] = t9;
        $[39] = t13;
    } else {
        t13 = $[39];
    }
    let t14;
    if ($[40] !== t10 || $[41] !== t11 || $[42] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[40] = t10;
        $[41] = t11;
        $[42] = t13;
        $[43] = t14;
    } else {
        t14 = $[43];
    }
    let t15;
    if ($[44] !== formatDate || $[45] !== formatTime || $[46] !== handleCloseSession || $[47] !== handleSendReply || $[48] !== messages || $[49] !== replyText || $[50] !== selectedSession) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 bg-card rounded-xl border border-white/10 overflow-hidden flex flex-col",
            children: selectedSession ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-white/10 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "h-5 w-5 text-secondary"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                            lineNumber: 327,
                                            columnNumber: 345
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                        lineNumber: 327,
                                        columnNumber: 256
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium",
                                                children: selectedSession.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                                lineNumber: 327,
                                                columnNumber: 399
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-400",
                                                children: [
                                                    "Gestart op ",
                                                    formatDate(selectedSession.createdAt)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                                lineNumber: 327,
                                                columnNumber: 453
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                        lineNumber: 327,
                                        columnNumber: 394
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                lineNumber: 327,
                                columnNumber: 215
                            }, this),
                            selectedSession.status === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleCloseSession,
                                className: "flex items-center gap-2 px-3 py-1.5 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                        lineNumber: 327,
                                        columnNumber: 751
                                    }, this),
                                    "Sluiten"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                lineNumber: 327,
                                columnNumber: 596
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                        lineNumber: 327,
                        columnNumber: 135
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4 space-y-4",
                        children: messages.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center text-gray-400 py-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Nog geen berichten in deze sessie"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                lineNumber: 327,
                                columnNumber: 926
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                            lineNumber: 327,
                            columnNumber: 878
                        }, this) : messages.map({
                            "ChatDashboard[messages.map()]": (msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `max-w-[80%] rounded-2xl p-3 ${msg.sender === "admin" ? "bg-secondary text-white rounded-tr-none" : "bg-white/10 text-gray-200 rounded-tl-none"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: msg.text
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                                lineNumber: 328,
                                                columnNumber: 313
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-xs mt-1 ${msg.sender === "admin" ? "text-white/60" : "text-gray-500"}`,
                                                children: [
                                                    formatTime(msg.timestamp),
                                                    msg.sender === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "h-3 w-3 inline ml-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                                        lineNumber: 328,
                                                        columnNumber: 496
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                                lineNumber: 328,
                                                columnNumber: 350
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                        lineNumber: 328,
                                        columnNumber: 150
                                    }, this)
                                }, msg.id, false, {
                                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                    lineNumber: 328,
                                    columnNumber: 53
                                }, this)
                        }["ChatDashboard[messages.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                        lineNumber: 327,
                        columnNumber: 799
                    }, this),
                    selectedSession.status === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSendReply,
                        className: "p-4 border-t border-white/10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: replyText,
                                    onChange: {
                                        "ChatDashboard[<input>.onChange]": (e_0)=>setReplyText(e_0.target.value)
                                    }["ChatDashboard[<input>.onChange]"],
                                    placeholder: "Typ uw antwoord...",
                                    className: "flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                    lineNumber: 329,
                                    columnNumber: 195
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: !replyText.trim(),
                                    className: "flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary/90 disabled:opacity-50 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                            lineNumber: 331,
                                            columnNumber: 402
                                        }, this),
                                        "Verstuur"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                                    lineNumber: 331,
                                    columnNumber: 210
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                            lineNumber: 329,
                            columnNumber: 167
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                        lineNumber: 329,
                        columnNumber: 93
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex items-center justify-center text-gray-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                            className: "h-16 w-16 mx-auto mb-4 opacity-30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                            lineNumber: 331,
                            columnNumber: 567
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Selecteer een chat sessie om te beginnen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                            lineNumber: 331,
                            columnNumber: 630
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                    lineNumber: 331,
                    columnNumber: 538
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ChatDashboard.tsx",
                lineNumber: 331,
                columnNumber: 467
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[44] = formatDate;
        $[45] = formatTime;
        $[46] = handleCloseSession;
        $[47] = handleSendReply;
        $[48] = messages;
        $[49] = replyText;
        $[50] = selectedSession;
        $[51] = t15;
    } else {
        t15 = $[51];
    }
    let t16;
    if ($[52] !== t12 || $[53] !== t14 || $[54] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/ChatDashboard.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, this);
        $[52] = t12;
        $[53] = t14;
        $[54] = t15;
        $[55] = t16;
    } else {
        t16 = $[55];
    }
    return t16;
}
_s(ChatDashboard, "ImQNgDokzGiXWyQRmIbRUZRwDQQ=");
_c = ChatDashboard;
function _ChatDashboardSessionsFilter(s) {
    return s.status === "active";
}
function _ChatDashboardFormatDate(timestamp_0) {
    if (!timestamp_0) {
        return "";
    }
    const date_0 = timestamp_0.toDate();
    return date_0.toLocaleDateString("nl-BE", {
        day: "numeric",
        month: "short"
    });
}
function _ChatDashboardFormatTime(timestamp) {
    if (!timestamp) {
        return "";
    }
    const date = timestamp.toDate();
    return date.toLocaleTimeString("nl-BE", {
        hour: "2-digit",
        minute: "2-digit"
    });
}
var _c;
__turbopack_context__.k.register(_c, "ChatDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Clock
]);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M12 6v6l4 2",
            key: "mmk7yg"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ]
];
const Clock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("clock", __iconNode);
;
 //# sourceMappingURL=clock.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Clock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_e94b299b._.js.map