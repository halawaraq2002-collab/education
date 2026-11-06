# Security Specification & Test Matrix

## 1. Data Invariants
- A user document at `/users/{userId}` can only be read or written by the authenticated owner where `request.auth.uid == userId` or an authenticated administrator.
- Users cannot escalate their own role from `student` to `admin`.
- Progress documents at `/users/{userId}/progress/{courseId}` belong strictly to the authenticated student matching `{userId}`.
- Quiz submissions at `/quizSubmissions/{submissionId}` must verify that `request.resource.data.userId == request.auth.uid`.

## 2. The Dirty Dozen Payloads
1. **Unauthenticated User Read**: Attempt to read `/users/user123` with no auth token -> `PERMISSION_DENIED`.
2. **Cross-User Profile Hijack**: User `attacker` tries to write to `/users/victim` -> `PERMISSION_DENIED`.
3. **Role Escalation Attack**: Student tries to update `role: 'admin'` in `/users/attacker` -> `PERMISSION_DENIED`.
4. **Junk ID Poisoning**: Creating `/users/very_long_invalid_id_over_128_chars...` -> `PERMISSION_DENIED`.
5. **PII Scraping via Blanket List**: Anonymous or unverified user listing all users -> `PERMISSION_DENIED`.
6. **Cross-User Progress Overwrite**: User `attacker` writes to `/users/victim/progress/html-course` -> `PERMISSION_DENIED`.
7. **Score Tampering on Others**: User `attacker` submits a quiz under `victim`'s userId -> `PERMISSION_DENIED`.
8. **Negative Points Injection**: Updating points with negative or invalid type -> `PERMISSION_DENIED`.
9. **Arbitrary Collection Infiltration**: Attempting to write to `/random_root_collection` -> `PERMISSION_DENIED`.
10. **Ghost Field Injection**: Adding unknown malicious system properties to user profile -> `PERMISSION_DENIED`.
11. **Spoofed Admin Claim**: Providing custom claim or fake admin token -> `PERMISSION_DENIED`.
12. **Null Resource Deletion**: Non-owner or non-admin attempting document deletion -> `PERMISSION_DENIED`.
