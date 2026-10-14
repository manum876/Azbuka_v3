# Cuentas de Azbuka: cómo configurarlas (una sola vez)

Tarda unos 30 minutos. No hay que programar: son clics y copiar y pegar. Las pantallas de Supabase y Brevo pueden tener nombres un poco distintos a los de acá; si algo no aparece, mandame una captura.

**Hasta que termines el paso 6, la app anda como siempre, sin pedir cuenta.** Las cuentas se prenden recién cuando me pasás las dos claves y te devuelvo `js/cuenta.js` con ellas.

---

## 1. Crear el proyecto en Supabase

1. Entrá en **supabase.com** → *Start your project* → entrá con tu cuenta de GitHub.
2. **New project**:
   - Nombre: `azbuka`.
   - Contraseña de la base de datos: generá una y guardala (no la vas a usar casi nunca).
   - Región: **West EU (Ireland)** o **Central EU (Frankfurt)**, cerca de Barcelona.
   - Plan: **Free**.
3. Esperá un par de minutos a que termine de armarse.

> El plan gratis **pausa el proyecto si pasa una semana sin que nadie entre**. Se reactiva con un botón en el panel de Supabase. Mientras está pausado, la app anda sin conexión con lo guardado en el teléfono, pero nadie nuevo puede entrar.

## 2. Pegar las reglas

1. En el menú de la izquierda: **SQL Editor** → **New query**.
2. Abrí `herramientas/cuentas/supabase.sql`, copiá todo y pegalo.
3. Tocá **Run**. Tiene que decir *Success*.

Esto crea la lista de mails habilitados (con vos como administrador), la tabla del progreso y las reglas: nadie puede crear una cuenta con un mail que no esté en la lista, y cada uno solo ve su propio progreso.

## 3. El servicio que manda los mails (Brevo, gratis)

Va antes que las plantillas: Supabase no deja cambiarlas sin esto.

Supabase solo manda mails a los miembros del proyecto, y como mucho dos por hora. Para que les lleguen a los demás, hace falta un servicio de envío. Brevo es gratis hasta 300 mails por día.

1. Creá una cuenta en **brevo.com** (plan gratis).
2. En Brevo: **Senders, Domains & Dedicated IPs** → **Senders** → **Add a sender**: nombre `Azbuka`, mail `azbuka.aprenderuso@gmail.com`. Te llega un mail a esa cuenta para confirmarlo.
3. En Brevo: **SMTP & API** → pestaña **SMTP** → **Generate a new SMTP key**. Copiala: se ve una sola vez. En esa misma pantalla figuran el servidor y el usuario (*Login*).
4. En Supabase: **Authentication** → **Emails** → **SMTP Settings** → *Enable Custom SMTP*:
   - Sender email: `azbuka.aprenderuso@gmail.com`
   - Sender name: `Azbuka`
   - Host: `smtp-relay.brevo.com`
   - Port: `587`
   - Username: el *Login* de Brevo.
   - Password: la *SMTP key*.
   - Guardá.

> Como el mail sale «desde» una cuenta de Gmail pero lo manda Brevo, a veces cae en **Spam** o **Promociones**. La pantalla de la app ya lo avisa. Si molesta, más adelante se puede usar un dominio propio.

## 4. El mail con el código

1. **Authentication** → **Sign In / Providers** → **Email**:
   - *Enable Email provider*: prendido.
   - *Confirm email*: prendido.
   - *Email OTP Length*: **6**.
   - Guardá.
2. **Authentication** → **Emails** → **Templates**. Hay que cambiar dos plantillas: **Magic Link** y **Confirm signup**. En las dos:
   - *Subject*: `Tu código para Azbuka`
   - *Body*: borrá lo que hay y pegá todo el contenido de `herramientas/cuentas/plantilla-mail.html`.
   - Guardá.

## 5. La dirección de la app

**Authentication** → **URL Configuration**:
- *Site URL*: `https://manum876.github.io/Azbuka_v3/`
- *Redirect URLs* → *Add URL*: `https://manum876.github.io/Azbuka_v3/**`
- Guardá.

## 6. Pasarme las dos claves

**Project Settings** (el engranaje) → **API** (o **Data API** y **API Keys**). Copiá y mandame en el chat:
- **Project URL** (algo como `https://abcd1234.supabase.co`);
- la clave **anon public** o **publishable** (larga; empieza con `eyJ` o con `sb_publishable_`).

**No me mandes la `service_role` ni la `secret`**: esas no se comparten nunca.

Las dos que sí me mandás son públicas a propósito: van dentro de la app y cualquiera las puede ver. Lo que protege los datos son las reglas del paso 2.

Te devuelvo `js/cuenta.js` con las claves. Cuando lo subas, la app empieza a pedir cuenta.

---

## Después: el día a día

- **Habilitar a alguien:** en la app, **Ajustes → Accesos** (solo lo ves vos). Escribís su mail, tocás *Habilitar* y le avisás. Entra con el código que le llega por mail.
- **Quitar a alguien:** en la misma lista, *Quitar*. No vuelve a entrar y se borran su cuenta y su progreso.
- **Tu primera vez:** entrás con tu mail y el progreso que ya tenés en el teléfono sube solo a la nube.
- **Otro teléfono:** entrás con el mismo mail y se baja tu progreso.
- **Eliminar la cuenta:** cada uno lo hace desde **Ajustes → Eliminar mi cuenta y mis datos**. Se borra todo: la cuenta, el progreso en la nube y lo guardado en el teléfono.

## Google (opcional, más adelante)

Se puede sumar *Entrar con Google*. Hace falta crear una credencial en Google Cloud (unos 20 minutos más) y prenderla en **Authentication → Sign In / Providers → Google**.

Ojo: en el iPhone, **con la app instalada en la pantalla de inicio**, Google abre una ventana de Safari y la sesión puede quedar en Safari en vez de en la app. Por eso el código por mail es la forma principal. Cuando quieras sumar Google, te armo los pasos.
