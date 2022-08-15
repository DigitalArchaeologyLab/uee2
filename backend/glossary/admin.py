from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from django.contrib.admin.filters import EmptyFieldListFilter


# Register your models here.
from .models import GlossaryTerm

class GlossaryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ["term_eng", "term_ar", "definition_eng"]
    list_filter = (
        ("definition_eng", EmptyFieldListFilter),
    )


admin.site.register(GlossaryTerm, GlossaryAdmin)
