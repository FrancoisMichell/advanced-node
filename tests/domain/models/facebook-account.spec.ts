import { FacebookAccount } from '@/domain/models'

describe('FacebookAccount', () => {
  const fbData = {
    name: 'any_fb_name',
    email: 'any_fb_email',
    facebookId: 'any_fb_id'
  }

  it('should create with facebook data only', () => {
    const sut = new FacebookAccount(fbData)

    expect(sut).toEqual({
      name: 'any_fb_name',
      email: 'any_fb_email',
      facebookId: 'any_fb_id'
    })
  })

  it('should update name if is empty', () => {
    const accountData = { id: 'any_id' }

    const sut = new FacebookAccount(fbData, accountData)

    expect(sut).toEqual({
      name: 'any_fb_name',
      email: 'any_fb_email',
      facebookId: 'any_fb_id',
      id: 'any_id'
    })
  })

  it('should not update name if is not empty', () => {
    const accountData = { id: 'any_id', name: 'any_name' }

    const sut = new FacebookAccount(fbData, accountData)

    expect(sut).toEqual({
      name: 'any_name',
      email: 'any_fb_email',
      facebookId: 'any_fb_id',
      id: 'any_id'
    })
  })
})
