from django.db import models

class Recipi(models.Model):
    image = models.ImageField(upload_to=("recipiimage"))
    name = models.CharField(max_length=255);
    created = models.DateField(auto_now_add=True)
    
    def __str__(self):
        return self.name


