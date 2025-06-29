from ckan.common import config

def chat_url():
    
    site_url = config.get('ckan.site_url')
    
    return site_url + "/chat"


def get_helpers():
    return {
        "chat_url": chat_url,
    }
