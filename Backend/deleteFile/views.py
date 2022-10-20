from django.shortcuts import render
from django.http import HttpRequest, HttpResponse
from listItems.models import markdownFile
from django.views.decorators.csrf import csrf_exempt

# TODO create secure way to do this.
@csrf_exempt
def deleteFile(request):
    if request.method == "POST":
        fileNameToDelete = request.body.decode("utf-8")
        file = markdownFile.objects.filter(title=fileNameToDelete).delete()
        returnText = '{name} has been deleted'.format(name=file)
        return HttpResponse(returnText)
