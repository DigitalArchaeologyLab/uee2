from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin

### Basic customization of the admin interface ###
admin.site.site_header = 'UCLA Encyclopedia of Egyptology - Admin'
admin.site.site_title = 'UEE Admin'

### Register and setup models ###
from .models import Author
admin.site.register(Author)

from .models import Article
class ArticleAdmin(MarkdownxModelAdmin):
  list_display = ('title_eng', 'title_ar', 'status')
  fieldsets = [
    ('Title', {'fields': ['title_eng', 'title_ar', 'title_fr', 'title_de']}),
    ('Author(s)', {'fields': ['authors']}),
    ('Abstracts', {'fields': ['abstract_eng', 'abstract_ar']}),
    ('Keywords', {'fields': ['keywords']}),
    ('Article body', {'fields': ['body']}),
  ]

admin.site.register(Article, ArticleAdmin)    

from .models import Keyword
class KeywordAdmin(admin.ModelAdmin):
  list_display = ('name_eng', 'name_ar', 'keyword_type')
admin.site.register(Keyword, KeywordAdmin)
