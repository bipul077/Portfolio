from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')#react ko build ko index.html lai target garxa

