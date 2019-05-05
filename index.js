// Copyright 2018 Google LLC. All rights reserved.
// Use of this source code is governed by the Apache 2.0
// license that can be found in the LICENSE file.

const app = require('./app.js');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`helloworld listening on port ${PORT}`));
