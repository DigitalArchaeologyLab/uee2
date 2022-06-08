from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

# Register your models here.
from .models import GlossaryTerm


class GlossaryAdmin(ImportExportModelAdmin, admin.ModelAdmin):
    list_display = ["term_eng", "term_ar", "definition_eng"]


admin.site.register(GlossaryTerm, GlossaryAdmin)
