from django.db import models
import uuid
# Create your models here.


class Testimonies(models.Model):
    testfiers_name = models.CharField(max_length=200, null=True, blank=True)
    title = models.CharField(max_length=200)
    slug = models.SlugField(null=True, blank=True)
    testimony_image = models.ImageField(upload_to='testimony-img/')
    location = models.CharField(max_length=200, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date_created']
