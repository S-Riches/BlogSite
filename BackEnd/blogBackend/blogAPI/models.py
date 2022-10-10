from django.db import models

# Create your models here.
# define a model by creating a class with values that line up to a sql table
class file(models.Model):
    # name of the document
    documentTitle = models.CharField(max_length=50)
    # document data is stored as a bytea
    data = models.BinaryField(null=True)