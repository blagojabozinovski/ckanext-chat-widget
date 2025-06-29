import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit
from ckanext.chat_widget import helpers


class ChatWidgetPlugin(plugins.SingletonPlugin):
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)
    

    # IConfigurer

    def update_config(self, config_):
        toolkit.add_template_directory(config_, "templates")
        toolkit.add_public_directory(config_, "public")
        toolkit.add_resource("assets", "chat_widget")

    # ITemplateHelpers
    
    def get_helpers(self):
        return helpers.get_helpers()
    
