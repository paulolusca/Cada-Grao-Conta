/**
 * Retorna a URL de uma imagem do Imgur com o sufixo de tamanho apropriado.
 * @param url A URL original da imagem.
 * @param size O tamanho desejado ('s', 'm', 'l').
 * @returns A URL da imagem redimensionada ou a URL original se não for uma imagem do Imgur.
 */
export const getResizedImgurUrl = (url: string, size: 's' | 'm' | 'l'): string => {
    if (!url.includes('i.imgur.com')) {
        return url; // Retorna a URL original se não for do Imgur
    }

    const parts = url.split('.');
    if (parts.length < 2) {
        return url; // URL inválida
    }

    const extension = parts.pop();
    const base = parts.join('.');

    // Remove qualquer sufixo de tamanho existente (ex: 'l' em '...l.jpg')
    const baseWithoutSuffix = base.replace(/[smlbt]$/, '');

    return `${baseWithoutSuffix}${size}.${extension}`;
};