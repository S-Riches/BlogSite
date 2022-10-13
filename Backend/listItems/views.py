from django.shortcuts import render
from django.http import HttpResponse
from listItems.models import markdownFile

# Create your views here.
def listOfFiles(request):
    files = markdownFile.objects.all()
    return HttpResponse(files)
