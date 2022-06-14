from django.contrib import admin
from markdownx.admin import MarkdownxModelAdmin
from treebeard.admin import TreeAdmin
from treebeard.forms import movenodeform_factory
from import_export.admin import ImportExportModelAdmin

import os

### Basic customization of the admin interface ###
admin.site.site_header = os.getenv("SITE_NAME") + " - Admin"
admin.site.site_title = os.getenv("SITE_TITLE") + " Admin"

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
        (
            "Article body",
            {
                "fields": ["body"],
                "description": "Use the tag and insert buttons to add the encoding for interactive elements. Highlight the word or phrase you want to tag and then select the appropriate button. To insert an image, place your cursor where you would like the image to be and click the Insert image button. If you need to remove something you have tagged using these buttons, delete everything from the first '<' to the last '>' except the text you had highlighted (i.e. <del>&ltspan class='taggedTerm' id='5'&gt</del>faience<del>&lt/span&gt</del>).",
            },
        ),
        (
            "Spatial and temporal tags - automatically generated",
            {
                "fields": ["place", "period", "activity"],
                "description": "These fields are automatically entered based on the places, periods, and timemap references (activities) that have been tagged in the body of the article. Please review and confirm their accuracy before saving.",
            },
        ),
        ("Collections", {"fields": ["collection"]}),
        ("Status", {"fields": ["status"]}),
    ]


admin.site.register(Article, ArticleAdmin)

from .models import SubjectArea


class SubjectAreaAdmin(TreeAdmin):
    form = movenodeform_factory(SubjectArea)


admin.site.register(SubjectArea, SubjectAreaAdmin)


from .models import Reference


class ReferenceAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ("author", "year")


admin.site.register(Reference, ReferenceAdmin)
