from django.shortcuts import render
from django.http import HttpResponse
from django.http import HttpRequest
from listItems.models import markdownFile
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
# this function is where the client sends its data to to be stored into the database.
# TODO look into csrf and how to make it more secure to send data over the internet instead of letting just anyone send data to the api
@csrf_exempt
def createFile(request):
    data = request.body
    return HttpResponse(data)
