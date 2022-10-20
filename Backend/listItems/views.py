from django.shortcuts import render
from django.http import HttpResponse
from listItems.models import markdownFile

# just returns a html page with the current blog posts, dont need to do much with authorisation as these will be publicly available anyway...
# useful for debugging purpose atm.
def listOfFiles(request):
    files = markdownFile.objects.all().values()
    return HttpResponse(files)
