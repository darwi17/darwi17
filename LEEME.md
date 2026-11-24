# FinanzApp para Android

FinanzApp permite registrar ingresos y gastos, ver el saldo y consultar movimientos recientes. Los datos se guardan en el almacenamiento local del dispositivo; no se envían a ningún servidor ni se sincronizan entre dispositivos.

## Descargar e instalar

Descarga `FinanzApp.apk` desde la sección **Releases** de este repositorio. Abre el archivo en Android y, si el sistema lo solicita, permite la instalación desde esa fuente.

## Crear el APK

El workflow **Construir APK** se puede iniciar desde la pestaña **Actions** con **Run workflow**. También se ejecuta al subir cambios. El APK se descarga desde los artefactos de la ejecución.

La aplicación está en `www/index.html`. El script de compilación comprueba que ese archivo exista y falla si falta, en lugar de crear una pantalla de ejemplo.
