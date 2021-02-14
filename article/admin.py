from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin

# Register your models here.
from .models import Author
admin.site.register(Author)
from .models import Article
admin.site.register(Article, MarkdownxModelAdmin)
from .models import Keyword
admin.site.register(Keyword)
