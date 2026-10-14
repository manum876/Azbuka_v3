/* Supabase falso para probar cuenta.js: el «servidor» vive en window.__SRV (lo inyecta la prueba) */
(function(){
  const SRV = () => JSON.parse(localStorage.getItem('__srv') || '{}');
  const KEY = 'sb-prueba-auth-token';
  function createClient(){
    const oyentes=[];
    const ses = () => { try { return JSON.parse(localStorage.getItem(KEY)); } catch(e){ return null; } };
    const call = (op, args) => new Promise((res) => { window.__llamar(op, args).then(r => res(r)); });
    const auth = {
      async signInWithOtp({email}){ const r = await call('otp',{email}); return r; },
      async verifyOtp({email, token}){ const r = await call('verify',{email, token}); if(r.error) return r;
        const s={user:r.data.user, access_token:'x'}; localStorage.setItem(KEY, JSON.stringify(s)); oyentes.forEach(f=>f('SIGNED_IN',s)); return {data:{session:s}, error:null}; },
      async getSession(){ return {data:{session:ses()}, error:null}; },
      onAuthStateChange(f){ oyentes.push(f); return {data:{subscription:{unsubscribe(){}}}}; },
      async signOut(){ localStorage.removeItem(KEY); oyentes.forEach(f=>f('SIGNED_OUT',null)); return {error:null}; },
      async signInWithOAuth(){ return {error:null}; }
    };
    const uid = () => (ses()||{user:{}}).user.id, mail = () => (ses()||{user:{}}).user.email;
    return {
      auth,
      rpc: (fn, args) => call('rpc', {fn, args, uid: uid(), email: mail()}),
      from: (t) => {
        const b = { _t:t, _sel:null, _eq:null,
          select(s){ this._sel=s; return this; }, eq(k,v){ this._eq=v; return this; },
          maybeSingle(){ return call('select',{t, sel:this._sel, uid:this._eq, me: uid()}); },
          upsert(row){ return call('upsert',{t, row, me: uid()}); },
          insert(row){ return call('insert',{t, row, me: uid(), email: mail()}); } };
        return b; }
    };
  }
  window.supabase = { createClient };
})();
