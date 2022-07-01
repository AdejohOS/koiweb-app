from django.db import models
import uuid
# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(null=True, blank=True)
    author = models.ForeignKey('Author', on_delete=models.CASCADE)
    tag = models.ManyToManyField('Tag', blank=True)
    description = models.TextField(max_length=300)
    post_image = models.ImageField(upload_to='blog-img/', null=True, blank=True, default='default.jpg')
    post_date = models.DateField(auto_now_add=False, null=True, blank=True)
    date_created = models.DateTimeField(auto_now_add=True)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-date_created']


class Author(models.Model):
    name = models.CharField(max_length=200)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.name


class Tag(models.Model):
    tag_name = models.CharField(max_length=200)
    id = models.UUIDField(default=uuid.uuid4, unique=True, primary_key=True, editable=False)

    def __str__(self):
        return self.tag_name
