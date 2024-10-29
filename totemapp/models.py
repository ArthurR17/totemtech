# models.py
from django.db import models

class Feedback(models.Model):
    emoji = models.CharField(max_length=20)  # Ajuste o tamanho conforme necessário
    comentario = models.TextField()  # O campo de texto para o comentário

    def __str__(self):
        return f"{self.emoji}: {self.comentario}"
