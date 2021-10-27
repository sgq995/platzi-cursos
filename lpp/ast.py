from abc import (
  ABC,
  abstractmethod,
)
from typing import (
  List,
  Optional,
)

from lpp.token import Token


class ASTNode(ABC):

  @abstractmethod
  def token_literal(self) -> str:
    pass

  @abstractmethod
  def __str__(self) -> str:
    pass


class Statement(ASTNode):
  
  def __init__(self, token: Token) -> None:
    self.token = token
  
  def token_literal(self) -> str:
    return self.token.literal


class Expression(ASTNode):

  def __init__(self, token: Token) -> None:
    self.token = token
  
  def token_literal(self) -> str:
    return self.token.literal


class Program(ASTNode):

  def __init__(self, statements: List[Statement]) -> None:
    self.statements = statements

  def token_literal(self):
    if len(self.statements) > 0:
      return self.statements[0].token_literal()
    
    return ''

  def __str__(self):
    out: List[str] = []
    for statement in self.statements:
      out.append(str(statement))

    return ''.join(out)


class Identifier(Expression):

  def __init__(self, 
              token: Token,
              value: str) -> None:
    super().__init__(token)
    self.value = value
  
  def __str__(self) -> str:
    return self.value

class LetStatement(Statement):

  def __init__(self, 
              token, 
              name: Optional[Identifier] = None, 
              value: Optional[Expression] = None) -> None:
    super().__init__(token)
    self.name = name
    self.value = value

  def __str__(self) -> str:
    return f'{self.token.literal} {str(self.name)} = {str(self.value)};'

class ReturnStatement(Statement):

  def __init__(self, 
              token: Token,
              return_value: Optional[Expression] = None) -> None:
    super().__init__(token)
    self.return_value = return_value

  def __str__(self) -> str:
    return f'{self.token_literal()} {str(self.return_value)};'
