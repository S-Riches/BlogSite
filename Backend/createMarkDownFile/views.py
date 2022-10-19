from turtle import title
from django.shortcuts import render
from django.http import JsonResponse, HttpRequest, multipartparser
from listItems.models import markdownFile
from django.views.decorators.csrf import csrf_exempt
import json

# Create your views here.
# this function is where the client sends its data to to be stored into the database.
# TODO look into csrf and how to make it more secure to send data over the internet instead of letting just anyone send data to the api
@csrf_exempt
def createFile(request):
    # used to ensure that the right method is used via the fetch API
    if request.method == "POST":
        # is returned as a bytes array, needs to be converted to JSON obj
        bodyData = request.body.decode("utf-8")
        # convert the string to a json object.
        bodyData = json.loads(bodyData)
        # now insert it into the database, after doing some formatting to make it match up with the model
        # ONLY COMMENT OUT THE BELOW TWO LINES WHEN ACTUALLY WANTING TO SAVE DATA
        # newFile = markdownFile(title=bodyData["Title"], dataContent=bodyData["Content"])
        # newFile.save()
        return JsonResponse(bodyData)
