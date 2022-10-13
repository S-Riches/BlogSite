from django.db import models

# Create your models here.
class markdownFile(models.Model):
    id = models.IntegerField( primary_key=True)
    title = models.CharField(max_length=30)
    data = models.BinaryField()