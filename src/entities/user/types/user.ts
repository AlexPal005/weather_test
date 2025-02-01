interface Location {
  street: {
    number: number
    name: string
  }
  city: string
  state: string
  country: string
  postcode: string
  coordinates: {
    latitude: string
    longitude: string
  }
  timezone: {
    offset: string
    description: string
  }
}

interface Name {
  title: string
  first: string
  last: string
}

interface Login {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

interface DateOfBirth {
  date: string
  age: number
}

interface Registered {
  date: string
  age: number
}

interface Id {
  name: string
  value: string
}

interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface User {
  gender: string
  name: Name
  location: Location
  email: string
  login: Login
  dob: DateOfBirth
  registered: Registered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

export interface UserResponse {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}
