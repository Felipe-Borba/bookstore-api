function authorize(...allowed) {
  const isAllowed = (role) => allowed.indexOf(role) > -1;
  return (req, res, next) => {
    if (req.auth.user) {
      const role = getRole(req.auth.user);

      if (isAllowed(role)) {
        next();
      } else {
        res.status(401).send("Role not allowed");
      }
    } else {
      res.status(403).send("User not found");
    }
  };
}

function getRole(username) {
  if (username == "admin") {
    return "admin";
  } else {
    return "client";
  }
}

module.exports = { authorize };
