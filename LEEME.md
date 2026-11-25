# FinanzApp para Android

FinanzApp permite registrar ingresos, gastos y transferencias, consultar balances y análisis, definir presupuestos, y ajustar apariencia y privacidad. Los datos se guardan localmente en el dispositivo: no hay cuenta, servidor ni sincronización.

## Descargar e instalar

Descarga `FinanzApp.apk` desde **Releases**. Abre el archivo en Android y, si el sistema lo solicita, permite la instalación desde esa fuente. Android podría pedir desinstalar una APK anterior si fue firmada con otra clave; desinstalar elimina los datos locales de esa instalación.

## Compilar

El workflow **Construir APK** compila al subir cambios o al seleccionar **Run workflow** en Actions. Descarga el archivo `FinanzApp-apk` de la ejecución.

La aplicación fuente está en `index.html`. `npm run build` la prepara en `www/index.html`, el directorio web configurado para Capacitor. El identificador Android se conserva como `com.finanzapp.app`.

## Antes de publicar en Google Play

Hace falta configurar una clave de firma de lanzamiento, generar un AAB firmado, confirmar el identificador de paquete definitivo, crear los recursos de icono de Android y preparar la ficha y política de privacidad.
