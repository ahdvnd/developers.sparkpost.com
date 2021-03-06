|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.opendkim.get_sig_selector)  | 15.2. Lua Functions |  [Next](lua.ref.msys.validate.opendkim.sign.php) |

<a name="lua.ref.msys.validate.opendkim.get_sig_signalg"></a>
## Name

msys.validate.opendkim.get_sig_signalg — Return the signing algorithm as a string

<a name="idp27718016"></a>
## Synopsis

`msys.validate.opendkim.get_sig_signalg(dkim_sig)`

`dkim_sig: userdata, DKIM_SIGINFO type`<a name="idp27721120"></a>
## Description

**Configuration Change. ** This function is available as of version 3.6.

This function requires the opendkim module. This function returns the DKIM signing algorithm string. Use `msys.validate.opendkim.get_num_sigs` and `msys.validate.opendkim.get_sig` to get a DKIM_SIGINFO object to pass to this function. For a description of the DKIM_SIGINFO object see [DKIM_DSIGINFO](http://www.opendkim.org/libopendkim/dkim_siginfo.html). This function returns the signing algorithm. Return values are:

*   `rsa-sha1`

*   `rsa-sha256`

*   `unknown`

The DKIM status (DKIM_STAT) is also returned. `DKIM_STAT` can be any one of the following values:

*   `DKIM_STAT_OK` – successful completion

*   `DKIM_STAT_BADSIG` – signature did not match headers and body

*   `DKIM_STAT_NOSIG` – no signature present

*   `DKIM_STAT_NOKEY` – no key available for verifying

*   `DKIM_STAT_CANTVRFY` – can't get key for verifying

*   `DKIM_STAT_SYNTAX` – message is not in valid syntax

*   `DKIM_STAT_NORESOURCE` – resource unavailable

*   `DKIM_STAT_INTERNAL` – internal error

*   `DKIM_STAT_REVOKED` – signing key revoked

*   `DKIM_STAT_INVALID` – invalid parameter(s)

*   `DKIM_STAT_NOTIMPLEMENT` – function not implemented

*   `DKIM_STAT_KEYFAIL` – key retrieval failed (try again later)

*   `DKIM_STAT_CBREJECT` – callback requested message rejection

*   `DKIM_STAT_CBTRYAGAIN` – callback can't complete (try again later)

*   `DKIM_STAT_CBERROR` – unspecified callback error

Enable this function with the statement `require('msys.validate.opendkim');`.

<a name="idp27751680"></a>
## See Also

[msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons "msys.validate.opendkim.get_sig_canons"), [msys.validate.opendkim.sign](lua.ref.msys.validate.opendkim.sign.php "msys.validate.opendkim.sign"), [msys.validate.opendkim.verify](lua.ref.msys.validate.opendkim.verify.php "msys.validate.opendkim.verify"), [msys.validate.opendkim.get_num_sigs](lua.ref.msys.validate.opendkim.get_num_sigs.php "msys.validate.opendkim.get_num_sigs"), [msys.validate.opendkim.get_sig](lua.ref.msys.validate.opendkim.get_sig.php "msys.validate.opendkim.get_sig"), [msys.validate.opendkim.get_sig_domain](lua.ref.msys.validate.opendkim.get_sig_domain.php "msys.validate.opendkim.get_sig_domain"), [msys.validate.opendkim.get_sig_selector](lua.ref.msys.validate.opendkim.get_sig_selector.php "msys.validate.opendkim.get_sig_selector"), [msys.validate.opendkim.get_sig_errorstr](lua.ref.msys.validate.opendkim.get_sig_errorstr.php "msys.validate.opendkim.get_sig_errorstr"), [msys.validate.opendkim.get_sig_flags](lua.ref.msys.validate.opendkim.get_sig_flags.php "msys.validate.opendkim.get_sig_flags"), [msys.validate.opendkim.get_sig_identity](lua.ref.msys.validate.opendkim.get_sig_identity.php "msys.validate.opendkim.get_sig_identity"), [msys.validate.opendkim.get_sig_keysize](lua.ref.msys.validate.opendkim.get_sig_keysize.php "msys.validate.opendkim.get_sig_keysize"), [msys.validate.opendkim.get_sig_hdrsigned](lua.ref.msys.validate.opendkim.get_sig_hdrsigned.php "msys.validate.opendkim.get_sig_hdrsigned"), [msys.validate.opendkim.get_sig_canons](lua.ref.msys.validate.opendkim.get_sig_canons.php "msys.validate.opendkim.get_sig_canons"), [Section 14.49, “opendkim – OpenDKIM module”](modules.opendkim.php "14.49. opendkim – OpenDKIM module") and [Section 14.27, “dkim – DomainKeys Identified Mail Signatures”](modules.dkim.php "14.27. dkim – DomainKeys Identified Mail Signatures")

|     |     |     |
| --- | --- | --- |
| [Prev](lua.ref.msys.validate.opendkim.get_sig_selector)  | [Up](lua.function.details.php) |  [Next](lua.ref.msys.validate.opendkim.sign.php) |
| msys.validate.opendkim.get_sig_selector  | [Table of Contents](index) |  msys.validate.opendkim.sign |
