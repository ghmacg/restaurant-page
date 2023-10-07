const createMap = () => {
    const map = document.createElement('iframe');
    map.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.9262442821146!2d-87.63997282354028!3d41.89444326439024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb5475ad0bf%3A0x4917adc43c6303c2!2sMr.%20Beef!5e0!3m2!1sen!2sus!4v1696696338495!5m2!1sen!2sus';
    map.setAttribute('width', '600');
    map.setAttribute('height', '450');
    map.setAttribute('loading', 'lazy');
    map.setAttribute('allowfullscreen', '');
    map.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
    map.style.border = '0';
    return map;
}

export default createMap;