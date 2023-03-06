import lzsRequest from '@/service'

export function getBanners() {
  return lzsRequest.get({
    url: '/banner'
  })
}

export function getHotRecommend(limit = 30) {
  return lzsRequest.get({
    url: '/personalized',
    params: {
      limit
    }
  })
}

export function getNewAlbum() {
  return lzsRequest.get({
    url: '/album/newest'
  })
}

export function getPlaylistDetail(id: number) {
  return lzsRequest.get({
    url: '/playlist/detail',
    params: {
      id
    }
  })
}

export function getArtistList(limit = 30) {
  return lzsRequest.get({
    url: '/artist/list',
    params: {
      limit
    }
  })
}
