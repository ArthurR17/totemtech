# forms.py
from django import forms
from .models import Feedback

class FeedbackForm(forms.ModelForm):
    class Meta:
        model = Feedback
        fields = ['emoji', 'comentario']  # Certifique-se de que esses campos correspondem aos definidos no seu modelo


