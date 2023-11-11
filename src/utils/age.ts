const getAge = () => {
  const born = new Date(2002, 10, 22);
  return new Date().getFullYear() - born.getFullYear();
};

export default getAge;
