from django.shortcuts import render
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Feedback
from .forms import FeedbackForm

@csrf_exempt  # Apenas para testes, use isso com cautela
def enviar_feedback(request):
    if request.method == 'POST':
        print("Dados recebidos:", request.POST)  # Verifica se os dados estão chegando
        form = FeedbackForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'mensagem': 'Feedback enviado com sucesso!'})
        else:
            print("Erros no formulário:", form.errors)  # Mostra erros se o formulário não for válido
            return JsonResponse({'mensagem': 'Erro ao enviar feedback: ' + str(form.errors)}, status=400)
    return JsonResponse({'mensagem': 'Método não permitido.'}, status=405)

def tela_inicial(request):
    return render(request, 'paginas/tela_inicial.html')

def menu_opcoes(request):
    return render(request, 'paginas/menu_opcoes.html')

def cursos(request):
    return render(request, 'paginas/cursos.html')

def sobre_nos(request):
    return render(request, 'paginas/sobrenos.html')

def registro(request):
    # Finaliza a sessão ao carregar a página
    request.session.flush()

    # Verifica se o usuário já está autenticado na sessão
    if not request.session.get('is_authenticated'):
        if request.method == 'POST':
            username = request.POST.get('username')
            password = request.POST.get('password')

            # Verifica se o login é 'admin' e a senha é '1234'
            if username == 'admin' and password == '1234':
                # Autentica o usuário, salvando a informação na sessão
                request.session['is_authenticated'] = True
            else:
                messages.error(request, 'Login ou senha incorretos.')

    # Verifica novamente se o usuário está autenticado, para exibir o conteúdo da página
    if request.session.get('is_authenticated'):
        return render(request, 'paginas/registro.html')  # Exibe o conteúdo da página de registro
    else:
        return render(request, 'paginas/registro.html', {'mostrar_modal': True})  # Exibe o modal de login

def trilha_auto(request):
    return render(request, 'paginas/trilha_auto.html')

def trilha_eletro(request):
    return render(request, 'paginas/trilha_eletro.html')

def trilha_metal(request):
    return render(request, 'paginas/trilha_metal.html')

def trilha_ti(request):
    return render(request, 'paginas/trilha_ti.html')

def mapa(request):
    return render(request, 'paginas/mapa_senai.html')
