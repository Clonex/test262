// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.now.zoneddatetime
description: String calendar and time zone arguments
features: [Temporal]
---*/

const zdt = Temporal.Now.zonedDateTime("gregory", "America/Los_Angeles");
assert(zdt instanceof Temporal.ZonedDateTime);
assert.sameValue(typeof zdt.getISOFields().calendar, "string", "calendar slot should store a string");
assert.sameValue(zdt.calendarId, "gregory");
assert(zdt.timeZone instanceof Temporal.TimeZone);
assert.sameValue(zdt.timeZone.id, "America/Los_Angeles");
