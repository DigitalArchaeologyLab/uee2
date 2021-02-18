from django.contrib import admin
# from markdownx.admin import MarkdownxModelAdmin

# Register your models here.
from .models import Author
admin.site.register(Author)

from .models import Article
class ArticleAdmin(admin.ModelAdmin):
  list_display = ('title_eng', 'title_ar', 'author_id', 'status')
  fieldsets = [
    ('Title', {'fields': ['title_eng', 'title_ar', 'title_fr', 'title_de']}),
    ('Author(s)', {'fields': ['author_id']}),
    ('Abstract', {'classes': ('collapse',),'fields': ['abstract_eng', 'abstract_ar']}),
    ('Keywords', {'fields': ['keywords']}),
    ('Article', {'fields': ['body']}),
  ]
admin.site.register(Article, ArticleAdmin)

from .models import Keyword
class KeywordAdmin(admin.ModelAdmin):
  list_display = ('name_eng', 'name_ar', 'keyword_type')
admin.site.register(Keyword, KeywordAdmin)
