from django.contrib import admin
from blog.models import Post, BlogComment
# Register your models here.

admin.site.register((BlogComment))

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    class Media:
        js= ('tinyInject.js',)

    search_fields = ['title','content']
    list_display = ['sno','title','timeStamp','views']
    list_filter = ['author']