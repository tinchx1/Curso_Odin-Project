import os
import subprocess

def subir_a_github(commit_msg):
    try:
        # Actualizar cambios remotos antes de agregar archivos locales
        subprocess.run(["git", "pull", "--rebase"])

        # Agregar todos los archivos al área de preparación
        subprocess.run(["git", "add", "."])

        # Realizar commit con el mensaje proporcionado
        subprocess.run(["git", "commit", "-m", commit_msg])

        # Subir los cambios al repositorio remoto (por ejemplo, origin)
        subprocess.run(["git", "push", "origin", "main"])

        print("¡Subida exitosa a GitHub!")

    except Exception as e:
        print(f"Error al subir a GitHub: {e}")

# Llamada a la función con un mensaje de commit
subir_a_github("Añadir cambios automáticos con el script")
