FROM rust:1.65 AS builder

WORKDIR /usr/src/rust-backend

COPY . .

RUN cargo build --release


FROM rust:1.65

COPY --from=builder /usr/src/rust-backend/target/release/rust-backend /usr/src/rust-backend

COPY .env /usr/src/

COPY templates/ /usr/src/templates

EXPOSE 9900

CMD [ "rust-backend" ]
