from enum import unique
from django.db import models

# Create your models here.
class markdownFile(models.Model):
    title = models.CharField(max_length=30, unique=True)
    dataContent = models.TextField()