from django.http import HttpRequest, JsonResponse, HttpResponse
from django.shortcuts import render
import json
from django.views.decorators.csrf import csrf_exempt
from listItems.views import markdownFile

# update a file by sending new data to the API, then overwriting the column.
@csrf_exempt
def updateFile(request):
    # get the file name and new content from the post
    if request.method == "POST":
        # create a json object from the request body
        newContent = request.body
        jsonObj = json.loads(newContent)
        pickedFileToUpdate = markdownFile.objects.filter(title=jsonObj["title"]) 
        if pickedFileToUpdate:
            # if file is in database, then overwrite the original with new data
            pickedFileToUpdate.delete()
            markdownFile(title=jsonObj["title"], dataContent=jsonObj["content"]).save()
            # return the data
            return JsonResponse(jsonObj)
        return HttpResponse("Data not in database")

    return HttpResponse("Wrong Method, use POST")