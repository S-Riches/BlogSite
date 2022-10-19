from django.db import models

# Create your models here.
class markdownFile(models.Model):
    title = models.CharField(max_length=30)
    dataContent = models.TextField()