from django.urls import path
from .views import tela_inicial, menu_opcoes, cursos, sobre_nos, registro, trilha_ti, trilha_auto, trilha_metal, trilha_eletro, mapa, enviar_feedback

urlpatterns = [
    path('', tela_inicial, name='tela_inicial'),
    path('menu_opcoes/', menu_opcoes, name='menu_opcoes'),
    path('cursos/', cursos, name='cursos'),
    path('sobre_nos/', sobre_nos, name='sobre_nos'),
    path('registro/', registro, name='registro'),
    path('trilha_auto/', trilha_auto, name='trilha_auto'),
    path('trilha_eletro/', trilha_eletro, name='trilha_eletro'),
    path('trilha_metal/', trilha_metal, name='trilha_metal'),
    path('trilha_ti/', trilha_ti, name='trilha_ti'),
    path('mapa/', mapa, name='mapa'),
    path('enviar_feedback/', enviar_feedback, name='enviar_feedback'),
]

