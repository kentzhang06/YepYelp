export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { 
      user: {
        email: user.email,
        password: user.password,
        first_name: user.firstName,
        last_name: user.lastName,
        zip_code: user.zipCode
      }
    }
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

export const getCurrentUser = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/session'
  })
};