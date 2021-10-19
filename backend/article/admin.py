from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin
from treebeard.admin import TreeAdmin
from treebeard.forms import movenodeform_factory
from import_export.admin import ImportExportModelAdmin


### Basic customization of the admin interface ###
admin.site.site_header = "UCLA Encyclopedia of Egyptology - Admin"
admin.site.site_title = "UEE Admin"

### Register and setup models ###
from .models import Author

admin.site.register(Author)

from .models import Article


class ArticleAdmin(MarkdownxModelAdmin):
    list_display = ("title_eng", "title_ar", "status")

    fieldsets = [
        ("Subject Area", {"fields": ["subject_area"]}),
        ("Title", {"fields": ["title_eng", "title_ar", "title_fr", "title_de"]}),
        ("Author(s)", {"fields": ["authors"]}),
        ("Abstracts", {"fields": ["abstract_eng", "abstract_ar"]}),
        ("Timemap", {"fields": ["place"]}),
        ("Keywords", {"fields": ["keywords"]}),
        ("Article body", {"fields": ["body"]}),
        ("Status", {"fields": ["status"]}),
    ]


admin.site.register(Article, ArticleAdmin)

from .models import Keyword


class KeywordAdmin(admin.ModelAdmin):
    list_display = ("name_eng", "name_ar", "keyword_type")


admin.site.register(Keyword, KeywordAdmin)

from .models import SubjectArea


class SubjectAreaAdmin(TreeAdmin):
    form = movenodeform_factory(SubjectArea)


admin.site.register(SubjectArea, SubjectAreaAdmin)


from .models import Reference


class ReferenceAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ("author", "year")


admin.site.register(Reference, ReferenceAdmin)
