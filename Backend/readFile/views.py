from django.shortcuts import render
from django.http import JsonResponse, HttpRequest
from listItems.models import markdownFile
from django.views.decorators.csrf import csrf_exempt
import json

# takes a post request with the filename, then returns the data to the user.
@csrf_exempt
def readFile(request):
    if request.method == "POST":
        fileName = request.body.decode("utf-8")
        returnData = list(markdownFile.objects.filter(title=fileName).values())
        # fine for now, but serialize just the content.
        return JsonResponse(returnData, safe=False)
