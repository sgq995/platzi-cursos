#ifndef TOKEN_H_
#define TOKEN_H_

enum token_type {
  ASSIGN,
  COMMA,
  EOF,
  FUNCTION,
  IDENT,
  ILLEGAL,
  INT,
  LBRACE,
  LET,
  LPAREN,
  PLUS,
  RBRACE,
  RPAREN,
  SEMICOLON
};

typedef token_type token_type_t;


struct token {
  token_type_t type;
  const char *literal;
};

typedef token token_t;

void token_to_string(token_t *tok, char *str);

#endif  // TOKEN_H_
