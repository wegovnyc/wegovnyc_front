# Purging the committed keys from git history

**Status:** files removed from `main` on 2026-08-04. **History not yet purged.**

## What was exposed

Committed in `58b858e`, public until 2026-08-04, in a **public** repo (and one
public fork). Local copies were moved to `../_wegov_secrets_quarantine_20260804/`
rather than deleted, so you can inspect or discard them yourself.

| File | Type | Fingerprint | Assessment |
|---|---|---|---|
| `ssh_key.pem` | RSA-2048 private, **unencrypted** | `SHA256:RQlGpXN8DD5ja+S8sfjJk6nQB81mV52pWT8Kssmd0is` | **Not** in root's `authorized_keys` on Hetzner `utilities-2` (verified 2026-08-04 — that box only trusts an ED25519 `antigravity@agent` key). Unknown what else, if anything, it opens. |
| `LightsailDefaultKey-us-east-1.pem` | RSA-2048 private, **unencrypted** | `SHA256:46tvZZYvY6he0fPmEJKUaCBlJ3Na5IdyjjERwE9BDi4` | AWS Lightsail region-default key, account `807526302597`. **Owner states Lightsail is no longer used**, so treated as opening nothing. |
| `ssh.pub` | Public key only | `SHA256:mDbon70aHVdkOI7vCdOODAIN+7OcH8Xi3zENkLns1P4` | Harmless alone; a third, separate key. |
| `*.exp` (12 files) | Expect scripts | — | Contain a literal `send "<passphrase>"`. Treat that passphrase as compromised wherever it is reused. |

## Why history still matters

Removing files from `main` does **not** remove them from history — every blob is
still fetchable by commit SHA. Assume all of the above is public and already
harvested; GitHub is continuously scraped for keys.

## Purge procedure

Do this only after you're satisfied nothing still trusts these keys.

```bash
# 1. Install the tool (once)
brew install git-filter-repo

# 2. Work on a FRESH clone — filter-repo refuses a dirty/linked repo
git clone --no-local https://github.com/wegovnyc/wegovnyc_front.git purge-tmp
cd purge-tmp

# 3. Strip the files from every commit
git filter-repo \
  --path ssh_key.pem \
  --path LightsailDefaultKey-us-east-1.pem \
  --path ssh.pub \
  --path-glob '*.exp' \
  --invert-paths

# 4. Confirm they're gone from ALL history
git log --all --oneline -- ssh_key.pem LightsailDefaultKey-us-east-1.pem '*.exp'   # expect empty

# 5. Force-push the rewritten history
git push --force --all
git push --force --tags
```

### Two things that will bite you

1. **The fork keeps the blobs alive.** `oliviacroteau667/wegovnyc_front` is a
   public fork; GitHub's fork network keeps objects reachable even after the
   parent is rewritten. Olivia must delete or re-clone her fork, or the keys stay
   fetchable through it.
2. **Rewriting breaks every existing clone.** Anyone with a local copy (including
   the fork) must re-clone; a normal `git pull` will conflict. Coordinate first.

After pushing, open a GitHub support request asking them to garbage-collect the
orphaned objects — rewritten commits stay fetchable by SHA until they do.

## Prevention (done 2026-08-04)

- `.gitignore` now blocks `*.pem`, `*.key`, `*.ppk`, `*.exp`, `ssh_key*`,
  `ssh.pub`, `id_rsa*`, `id_ed25519*`, `.env.*`.
- Enable **secret scanning + push protection** in Settings → Code security. It
  was **disabled** on this repo, which is why no alert ever fired.
- The extracted `sarapis/unnyc` repo was deliberately given a fresh history for
  this reason and carries none of these files.
